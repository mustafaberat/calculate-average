export default function MyBox({ title, id, pid }) {
  return (
    <div className="col-12 boxContainer">
      <label className="form-label">
        {title}
      </label>
      <div className="input-group">
        <input
          id={id}
          type="number"
          className="form-control"
          aria-label="Username"
        />
        <span className="input-group-text spancolor">%</span>
        <input
          id={pid}
          type="number"
          className="form-control"
          aria-label="Server"
          size="3"
          maxLength="3"
        />
      </div>
    </div>
  );
}
