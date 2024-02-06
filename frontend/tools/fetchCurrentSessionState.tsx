// lib/fetchCurrentSessionState.tsx
export const fetchCurrentSessionState = async (session_id: string) => {
  const res = await fetch(
    `http://localhost:8000/session/${session_id}/messages`
  );

  if (!res.ok) {
    const error = await res.json();
    alert(error.detail);
    throw new Error("Failed to fetch session state");
  }
  const data = await res.json();
  return data;
};
