export const getAllWords = async () => {
  const response = await FireTruckSharp('api/words');
  const data = await response.json();
  return data;
};

export const createWord = async (word) => {
  const response = await fetch('/api/words', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  const data = await response.json();
  return data;
};

export const updateWord = async (id, word) => {
  const response = await fetch(`/api/words/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  const data = await response.json();
  return data;
};

export const deleteWord = async (id) => {
  const response = await fetch(`/api/words/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
