import CustomerCreatedEvent from './customer-created.event'
import EventDispatcher from '../@shared/event-dispatcher'
import AddCustomerToNewsletterHandler from './handler/add-customer-to-newsletter.handler'
import SendCustomerVerificationEmailHandler from './handler/send-customer-verification-email.handler'

describe('Customer created event', () => {
  it('should register all the handlers', () => {
    const customerCreatedEvent = new CustomerCreatedEvent({
      id: '123',
    })
    const eventDispatcher = new EventDispatcher()

    const addCustomerToNewsletterHandler = new AddCustomerToNewsletterHandler()
    const sendCustomerVerificationEmailHandler =
      new SendCustomerVerificationEmailHandler()

    eventDispatcher.register(
      customerCreatedEvent.constructor.name,
      addCustomerToNewsletterHandler
    )
    eventDispatcher.register(
      customerCreatedEvent.constructor.name,
      sendCustomerVerificationEmailHandler
    )

    expect(
      eventDispatcher.getEventHandlers[customerCreatedEvent.constructor.name]
        .length
    ).toBe(2)
  })

  it('should call the handlers when notified', () => {
    const customerCreatedEvent = new CustomerCreatedEvent({
      id: '123',
    })
    const eventDispatcher = new EventDispatcher()

    const addCustomerToNewsletterHandler = new AddCustomerToNewsletterHandler()
    const sendCustomerVerificationEmailHandler =
      new SendCustomerVerificationEmailHandler()

    eventDispatcher.register(
      customerCreatedEvent.constructor.name,
      addCustomerToNewsletterHandler
    )
    eventDispatcher.register(
      customerCreatedEvent.constructor.name,
      sendCustomerVerificationEmailHandler
    )

    const addCustomerToNewsletterHandlerSpy = jest.spyOn(
      addCustomerToNewsletterHandler,
      'handle'
    )
    const sendCustomerVerificationEmailHandlerSpy = jest.spyOn(
      sendCustomerVerificationEmailHandler,
      'handle'
    )

    eventDispatcher.notify(customerCreatedEvent)

    expect(addCustomerToNewsletterHandlerSpy).toHaveBeenCalled()
    expect(sendCustomerVerificationEmailHandlerSpy).toHaveBeenCalled()
  })
})
