// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs").promises;
const file = require("../../../public/files/numberofviews");
const path = require("path");

export default async (req, res) => {
  const clientIp =
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.socket.remoteAddress;
  console.log("clientIp", clientIp);
  console.log(
    typeof file.ip_requested,
    typeof clientIp,
    file.ip_requested.includes(clientIp)
  );
  if (!file.ip_requested.includes(clientIp)) {
    file.totalUniqueViews += 1;
    file.ip_requested += `,[${clientIp}]`;
  }
  file.totalViews += 1;
  await fs.writeFile(
    path.join(process.cwd(), "public", "files", "numberofviews.json"),
    JSON.stringify(file),
    "utf8"
  );
  // console.log("file==>", file);
  res.status(200).json({ name: "John Doe" });
};
