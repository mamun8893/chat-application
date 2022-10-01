const getPartnerInfo = (users, email) => {
  return users.find((user) => user.email !== email);
};

export default getPartnerInfo;
