const {getFirestore, FieldValue} = require("firebase-admin/firestore");
const {onRequest} = require("firebase-functions/v2/https");

const db = getFirestore();

exports.getprofile = onRequest(async (req, res) => {
  const uid = req.get("uid");

  if (typeof uid == "undefined") {
    res.json({
      ok: false,
      message: "authentication error",
    });
    return
  }

  const snapshot = await db.collection("users").doc(uid ?? "").get();
  const data = snapshot.data();
  res.json(data);
});

exports.getprofiles = onRequest(async (req, res) => {
  const snapshot = await db.collection("users").get();
  const datas = snapshot.docs.map((doc) => doc.data());
  res.json(datas);
});

exports.postprofile = onRequest(async (req, res) => {
  const uid = req.get("uid");
  const profile = req.body;
  profile.updatedAt = FieldValue.serverTimestamp();

  if (typeof uid == "undefined") {
    res.json({
      ok: false,
      message: "authentication error",
    });
  }

  await db.collection("users").doc(uid ?? "").set(profile);

  res.json({
    ok: true,
  });
});
