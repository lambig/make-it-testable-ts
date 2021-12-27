import { EditedDate } from "../main/EditedDate"
test("output", () => {
    const sut = new EditedDate();
    expect(sut.get()).toMatch("???");
})