import axios from "axios";

async function getAllTracking() {
  try {
    const { data } = await axios.get("http://localhost:3001/search", {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    } else {
      return null;
    }
  }
}

async function getTrackingById(id: string) {
  try {
    const { data } = await axios.get(`http://localhost:3001/search/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    } else {
      return null;
    }
  }
}

async function createTracking(prefix: string, number: string) {
  try {
    const { data } = await axios.post(
      `http://localhost:3001/search`,
      { prefix, number },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null;
    } else {
      return null;
    }
  }
}

export { getAllTracking, getTrackingById, createTracking };
