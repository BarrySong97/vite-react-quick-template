import React from 'react';

type Props = {
  name: string;
  done: boolean;
};

export default function TodoItem({ name, done }: Props) {
  return <div className="mt-2"></div>;
}
