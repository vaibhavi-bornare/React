import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
  const [searchParams]=useSearchParams();
  const username=searchParams.get("Navigate");
  console.log(username);
  return (
    <div>About</div>
  )
}
