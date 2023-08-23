export function FormSection({ handleSubmit, children }) {
  return (
    <form className="form__section" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
