import React, { useMemo } from "react";

const HookTask1 = () => {
  const email = 'abc@gmail.com';
 
  const formattedEmail = useMemo(() => {
    const name = email.split('@')
    console.log('name:', name);
    const arr1 = name[0]
    // console.log('arr1:', arr1);
    const arr2 = name[1]
    // console.log('arr2:', arr2);

    const newEmail = arr1.slice(0, 2) 
    // console.log('newEmail:', newEmail);
    const result = newEmail.concat('**@', arr2)
    // console.log(result);
    return result
  }, [email]); 

  return (
    <div>
      <h2>Email</h2>
      <p>{formattedEmail}</p>
    </div>
  );
};

export default HookTask1;
