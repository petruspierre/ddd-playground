import EventDispatcher from '../@shared/event-dispatcher'
import CustomerAddressChangedEvent from './customer-address-changed.event'
import SendConfirmationLetterWhenCustomerAddressIsChangedHandler from './handler/send-confirmation-letter-when-customer-address-is-changed.handler'

describe('Customer address changed event', () => {
  it('should register all the handlers', () => {
    const customerAddressChanged = new CustomerAddressChangedEvent({
      id: '123',
      name: 'John Doe',
      address: 'Rua 1, 123',
    })

    const eventDispatcher = new EventDispatcher()

    const sendConfirmationLetterWhenCustomerAddressIsChangedHandler =
      new SendConfirmationLetterWhenCustomerAddressIsChangedHandler()

    eventDispatcher.register(
      customerAddressChanged.constructor.name,
      sendConfirmationLetterWhenCustomerAddressIsChangedHandler
    )

    expect(
      eventDispatcher.getEventHandlers[customerAddressChanged.constructor.name]
        .length
    ).toBe(1)
  })

  it('should call the handlers when notified', () => {
    const customerAddressChanged = new CustomerAddressChangedEvent({
      id: '123',
      name: 'John Doe',
      address: 'Rua 1, 123',
    })

    const eventDispatcher = new EventDispatcher()

    const sendConfirmationLetterWhenCustomerAddressIsChangedHandler =
      new SendConfirmationLetterWhenCustomerAddressIsChangedHandler()

    eventDispatcher.register(
      customerAddressChanged.constructor.name,
      sendConfirmationLetterWhenCustomerAddressIsChangedHandler
    )

    const sendConfirmationLetterWhenCustomerAddressIsChangedHandlerSpy =
      jest.spyOn(
        sendConfirmationLetterWhenCustomerAddressIsChangedHandler,
        'handle'
      )

    eventDispatcher.notify(customerAddressChanged)

    expect(
      sendConfirmationLetterWhenCustomerAddressIsChangedHandlerSpy
    ).toHaveBeenCalled()
  })
})
