
export async function summariseVideo(url) {
  const response = await fetch("http://localhost:8000/summarise", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  return response.json();
}
