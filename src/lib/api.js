// Base URL of the form backend (transitionmemorybackend), deployed on Vercel.
export const API_URL = 'https://transitionmemorybackend.vercel.app'

/**
 * POST a form payload to the backend.
 * Resolves on success; rejects with an Error whose message is safe to show to the user.
 */
export async function submitForm(path, payload) {
  let res
  try {
    res = await fetch(`${API_URL}/api/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('We could not reach the server. Please check your connection and try again.')
  }

  let body = {}
  try {
    body = await res.json()
  } catch {
    /* non-JSON error page */
  }

  if (!res.ok || !body.ok) {
    const msg = Array.isArray(body.errors) && body.errors.length ? body.errors.join(' ') : 'Something went wrong. Please try again.'
    throw new Error(msg)
  }
  return body
}
