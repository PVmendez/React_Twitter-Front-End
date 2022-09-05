function UserPasswordInput({inputHandle, datos}) {
  return (
    <div className="form-floating mb-3">
      <input
        type="password"
        className="form-control bg-black"
        id="password"
        name="password"
        placeholder="Password"
        required
        onChange={inputHandle}
        value={datos.password}
      />
      <label className="text-white" htmlFor="password">
        * Contraseña
      </label>
    </div>
  );
}

export default UserPasswordInput;
