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
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
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
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
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
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export { getAllTracking, getTrackingById, createTracking };
