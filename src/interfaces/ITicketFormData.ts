export interface ITicketFormData {
  fullName: string,
  email: string,
  ticketType: 'premium' | 'regular' | 'floor' | 'roof',
  dateOfBirth: string,
}
