export default function MyBox({ title, id, pid }) {
  return (
    <div className="col-12 boxContainer">
      <label for="basic-url" class="form-label">
        {title}
      </label>
      <div class="input-group">
        <input
          id={id}
          type="number"
          class="form-control"
          aria-label="Username"
        />
        <span class="input-group-text spancolor">%</span>
        <input
          id={pid}
          type="number"
          class="form-control"
          aria-label="Server"
          size="3"
          maxlength="3"
        />
      </div>
    </div>
  );
}
