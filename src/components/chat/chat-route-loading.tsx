export function ChatRouteLoading() {
  return (
    <div
      className="chat-route-loading"
      role="status"
      aria-label="Loading AI portfolio"
    >
      <div className="chat-loading-header" aria-hidden="true">
        <div className="chat-loading-avatar" />
      </div>

      <div className="chat-loading-center" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="chat-loading-composer" aria-hidden="true">
        <span />
        <i />
      </div>
    </div>
  );
}
