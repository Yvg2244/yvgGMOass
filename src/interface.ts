export interface user {
    name: string | null,
    email: string | null,
    number: number | null
}
export interface post {

    userId: number,
    id: number,
    title: string,
    body: string

}