function UserNameInput({inputHandle, datos}) {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control bg-black"
        id="username"
        name="username"
        placeholder="name@example.com"
        required
        onChange={inputHandle}
        value={datos.username}
      />
      <label className="text-white" htmlFor="username">
        * Nombre de usuario
      </label>
    </div>
  );
}

export default UserNameInput;
