type Props = {
  todo: Todo;
  isTemp?: boolean;
  isDeleting?: boolean;
  onDelete?: (id: number) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  isTemp = false,
  isDeleting = false,
  onDelete,
}) => (
  <div
    data-cy="Todo"
    className={`todo ${todo.completed ? 'completed' : ''} ${isDeleting ? 'is-deleting' : ''}`}
  >
    <label className="todo__status-label">
      <input
        data-cy="TodoStatus"
        type="checkbox"
        className="todo__status"
        checked={todo.completed}
        readOnly
        disabled={isTemp || isDeleting}
      />
    </label>

    <span data-cy="TodoTitle" className="todo__title">
      {todo.title}
    </span>

    <button
      type="button"
      className="todo__remove"
      data-cy="TodoDelete"
      disabled={isTemp || isDeleting}
      onClick={() => onDelete && onDelete(todo.id)}
    >
      ×
    </button>

    {isDeleting && (
  <div data-cy="TodoLoader" className="modal overlay is-active">
    <div className="modal-background has-background-white-ter" />
    <div className="loader" />
  </div>
)}
  </div>
);
