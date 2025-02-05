// create a new comment
router.post('/', async (req, res) => {
  try {
    const comment = new Comment({
      text: req.body.text,
        user: req.body.user,
        post: req.body.post
    });
    await comment.save();
    res.send(comment);
    } catch (error) {
    console.log(error);
    res.sendStatus(500);
    }
}
);




