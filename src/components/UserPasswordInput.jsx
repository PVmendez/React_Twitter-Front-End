function UserPasswordInput() {
  return (
    <div className="form-floating mb-3">
      <input
        type="password"
        className="form-control bg-black"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <label className="text-white" for="password">
        * Contraseña
      </label>
    </div>
  );
}

export default UserPasswordInput;
