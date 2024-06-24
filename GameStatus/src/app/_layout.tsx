import {Slot, router} from 'expo-router';
import { useEffect } from 'react';


function InitialLayout() {
  let signed = false;

  useEffect(() => {
    if (signed) {
      router.replace("(auth)");
    } else {
      router.replace("(public)");
    }
  }, [signed]);

  return <Slot />;
}

export default function Layout() {
  return (
    <InitialLayout />
  )
}