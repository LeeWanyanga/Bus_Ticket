from rest_framework import serializers
from BusTicket.models import Ticket
class TicketSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '_all_'