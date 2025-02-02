jest.spyOn(console, "warn").mockImplementation((message) => {
    if (message.includes("React Router Future Flag Warning")) {
      return; // Suppress React Router's specific warning
    }
    console.warn(message); // Let other warnings show
  });
  