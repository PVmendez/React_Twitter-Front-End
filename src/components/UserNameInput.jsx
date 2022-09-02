function UserNameInput() {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control bg-black"
        id="username"
        name="username"
        placeholder="name@example.com"
        required
      />
      <label className="text-white" for="username">
        * Nombre de usuario
      </label>
    </div>
  );
}

export default UserNameInput;
