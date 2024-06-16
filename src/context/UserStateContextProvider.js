import React, { createContext, useEffect, useState } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
export const UserStateContext = createContext();

const UserStateContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(true); // initally set no logged in
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { accessToken, idToken } =
  //         (await fetchAuthSession()).tokens ?? {};
  //       // Handle accessToken and idToken here
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData(); // Call the asynchronous function
  // }, [isSignedIn]);
  // useEffect(() => {
  //   // const user = getCurrentUser();
  //   // if (user)
  //   // {
  //   //   setIsSignedIn(true)
  //   // }
  //   // Hub.listen('auth', ({ payload }) => {
  //   //   switch (payload.event) {
  //   //     case 'signedIn':
  //   //       console.log('user have been signedIn successfully.');
  //   //       break;
  //   //     case 'signedOut':
  //   //       console.log('user have been signedOut successfully.');
  //   //       break;
  //   //     case 'tokenRefresh':
  //   //       console.log('auth tokens have been refreshed.');
  //   //       break;
  //   //     case 'tokenRefresh_failure':
  //   //       console.log('failure while refreshing auth tokens.');
  //   //       break;
  //   //     case 'signInWithRedirect':
  //   //       console.log('signInWithRedirect API has successfully been resolved.');
  //   //       break;
  //   //     case 'signInWithRedirect_failure':
  //   //       console.log('failure while trying to resolve signInWithRedirect API.');
  //   //       break;
  //   //     case 'customOAuthState':
  //   //       console.info('custom state returned from CognitoHosted UI');
  //   //       break;
  //   //   }
  //   // });

  // },[]);
  return (
    <UserStateContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserStateContextProvider;
