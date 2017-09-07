function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    if (text.includes(cloze)) {
        this.partial = text.replace(cloze, "...");
    } else {
        this.partial = "oops, error";
    }
};

module.exports = ClozeCard;
