export function InputBox({
  inputVal,
  onSetDate,
  valid,
  invalidMessage,
  label,
  isSubmitted,
  pholder,
  id,
  maxLength,
}) {
  return (
    <div className={`input__box input__${id}`}>
      <label
        className={(!inputVal && isSubmitted) || valid ? "text-red-400" : ""}
      >
        {label}
      </label>
      <input
        type="text"
        minLength="1"
        maxLength={maxLength}
        placeholder={pholder}
        className={(!inputVal && isSubmitted) || valid ? "border-red-400" : ""}
        id={id}
        value={inputVal}
        onChange={(e) => onSetDate(e.target.value)}
      />
      <small>
        {!inputVal && isSubmitted
          ? "This field required"
          : valid
          ? invalidMessage
          : ""}
      </small>
    </div>
  );
}
