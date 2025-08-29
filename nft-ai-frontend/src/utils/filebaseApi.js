export async function uploadImageToFilebase(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('http://localhost:5001/upload', {
    method: 'POST',
    body: formData,
  });

  return response.json();
}



