import "date-utils"

export class EditedDate {
    public get(): string {
        const date = new Date()
        return `${date.toDateString()} ${date.getHours() > 11 ? "午前" : "午後"}`;
    }
}