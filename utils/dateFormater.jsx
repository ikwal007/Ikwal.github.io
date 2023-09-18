const formattedDate = (createdAt) => {
  if (createdAt === null) {
    return null;
  }
  const newCreatedAt = new Date(
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  );
  const formattedDate = newCreatedAt.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export default formattedDate;
