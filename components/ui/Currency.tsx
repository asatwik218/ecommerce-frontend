'use client'
import React, { useEffect, useState } from "react";

type Props = {
	value?: string | number;
};

export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "INR",
});

const Currency = ({ value }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  
    
  }, [])

  if(!isMounted) return null;
  
	return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
