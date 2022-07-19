import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * useAuth: hook to gets  the autenthication state in localsorage
 * @params:
 * [navigation]: Object: The navigation object
 * @returns
 * useAuthentication: Boolean, Indicates if is authenticated
 * storeData: Func...
 */
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const storeData = useCallback(async (value) => {
    try {
      await AsyncStorage.setItem("isAuthenticated", value);
    } catch (e) {
      // saving error
      console.warn(e);
    }
  }, []);

  const getData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("isAuthenticated");
      if (value !== null) {
        // value previously stored
        setIsAuthenticated(value);
      }
    } catch (e) {
      // error reading value
    }
  }, [setIsAuthenticated]);

  return {
    isAuthenticated,
    storeData,
  };
};

export default useAuth;
