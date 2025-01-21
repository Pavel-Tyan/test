import { useContext } from "react";
import {
  ChangeStatusContext,
  DeleteCompletedContext,
} from "@components/TodoProvider/TodoProvider";
import styles from "@components/TodoList/TodoList.module.css";
import { Button } from "@components/Button/Button";
import { useFilter } from "@/hooks/useFilter";
import { Status } from "@/hooks/useFilter";
import cn from "classnames";

export const TodoList = () => {
  const { setFilter, displayedTodos } = useFilter();
  const changeStatusById = useContext(ChangeStatusContext);
  const deleteCompleted = useContext(DeleteCompletedContext);

  return (
    <div>
      {displayedTodos.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <Button size="large" onClick={() => changeStatusById?.(item.id)}>
              Change status
            </Button>
            <TodoList.Item text={item.text} hasCompleted={item.hasCompleted} />
          </div>
        );
      })}
      <div className={styles.buttonWrapper}>
        <Button size="large" onClick={() => setFilter(Status.ACTIVE)}>
          Show Active
        </Button>
        <Button size="large" onClick={() => setFilter(Status.COMPLETED)}>
          Show Completed
        </Button>
        <Button size="large" onClick={() => setFilter(Status.ALL)}>
          Show All
        </Button>
        <Button size="large" onClick={() => deleteCompleted?.()}>
          Delete Completed
        </Button>
      </div>
    </div>
  );
};

export interface TodoItemProps {
  text: string;
  hasCompleted: boolean;
}

const TodoItem = ({ text, hasCompleted }: TodoItemProps) => {
  return (
    <div className={cn(styles.item, { [styles.completed]: hasCompleted })}>
      {text}
    </div>
  );
};

TodoList.Item = TodoItem;
