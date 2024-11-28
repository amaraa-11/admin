"use client";
import users from "./UsersCard.json";
import "./style.css";

import { UsersCard } from "./UsersCard";

import { Card } from "./Card.js";

export default function Home() {
  const userList = users.map((user) => <Card user={user} />);

  return <div>{userList}</div>;
}
