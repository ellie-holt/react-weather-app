export function getApiErrorMessage(error, apiName) {
  if (error.response) {
    const status = error.response.status;
    const message = error.response.data?.message;

    if (status === 401) {
      return `Invalid ${apiName} API key.`;
    }

    if (status === 404) {
      return `${apiName} data not found.`;
    }

    if (status === 429) {
      return `${apiName} rate limit exceeded. Please try again later.`;
    }

    if (status >= 500) {
      return `${apiName} server error. Please try again later.`;
    }

    if (message) {
      return `${apiName} error: ${message}`;
    }

    return `${apiName} request failed.`;
  }

  if (error.request) {
    return `No response from the ${apiName} API. Please check your internet connection.`;
  }

  return `An unexpected error occurred while fetching ${apiName} data.`;
}
