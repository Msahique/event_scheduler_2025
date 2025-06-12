async function adminBot(actionType, eventId) {
    const event = await getEventById(eventId);
  
    if (!event) {
      console.error('Event not found!');
      return;
    }
  
    switch (actionType) {
      case 'cancel_event':
        await cancelEvent(eventId);
        console.log('Event cancelled successfully.');
        break;
  
      case 'change_schedule':
        const participantConfirmed = await askParticipantConfirmation(event.participants);
  
        if (participantConfirmed) {
          const newTime = await findDoctorAvailability(event.resourceId);
          if (newTime) {
            await rescheduleEvent(eventId, newTime);
            console.log('Event rescheduled successfully.');
          } else {
            console.error('No doctor available for rescheduling.');
          }
        } else {
          await cancelEvent(eventId);
          console.log('Event cancelled as participant declined.');
        }
        break;
  
      case 'resource_unavailable':
        const alternativeResource = await findAlternativeResource(event);
        if (alternativeResource) {
          await addAppointmentWithNewResource(event, alternativeResource);
          await deleteAppointmentOfCurrentResource(event.resourceId, eventId);
          console.log('Resource updated and event rescheduled.');
        } else {
          console.error('No alternative resource found.');
        }
        break;
  
      default:
        console.error('Invalid action type!');
    }
  }

  
  async function getEventById(eventId) {
    // fetch event details from your database
  }
  
  async function cancelEvent(eventId) {
    // delete event or mark it as cancelled in DB
  }
  
  async function askParticipantConfirmation(participants) {
    // Send notification to participants, collect YES/NO
    // Return true or false
  }
  
  async function findDoctorAvailability(resourceId) {
    // Check doctor's free slots
    // Return a new available time
  }
  
  async function rescheduleEvent(eventId, newTime) {
    // Update event's time in database
  }
  
  async function findAlternativeResource(event) {
    // Find another doctor/resource available at the same time
  }
  
  async function addAppointmentWithNewResource(event, newResource) {
    // Create a new appointment with alternative resource
  }
  
  async function deleteAppointmentOfCurrentResource(resourceId, eventId) {
    // Remove old resource's appointment
  }
  