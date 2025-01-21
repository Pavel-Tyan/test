import { Context, Todo } from "@/components/TodoProvider/TodoProvider";
import { useContext, useEffect, useState } from "react";

export enum Status {
  COMPLETED,
  ACTIVE,
  ALL,
}

export const useFilter = () => {
  const todos = useContext<Todo[]>(Context);
  const [filter, setFilter] = useState<Status>(Status.ALL);
  const [displayedTodos, setDisplayedTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    if (filter === Status.COMPLETED) {
      setDisplayedTodos(todos.filter((item) => item.hasCompleted));
      return;
    }

    if (filter === Status.ACTIVE) {
      setDisplayedTodos(todos.filter((item) => !item.hasCompleted));
      return;
    }

    setDisplayedTodos(todos);
  }, [todos, filter]);

  return { setFilter, displayedTodos };
};
