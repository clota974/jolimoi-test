export default async function getConversion(value: number) {
  const body = {
    value
  };

  try {
    const req = await fetch('/convert', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const res = await req.json();
    return res;
  } catch(err) {
    return {
      status: 'ERROR',
      payload: err
    }
  }
}