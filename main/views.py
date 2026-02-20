from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from .models import Contact
from django.conf import settings


# Create your views here.
def test(request):
    return render(request, 'test.html')

def home(request):
    return render(request, "home.html")

def case_study(request, slug):
    return render(request, f"case_studies/{slug}.html")

def projects(request):
    return render(request, "projects.html")

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Save to DB
        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        # Send Email
        send_mail(
            subject=f"New Contact Message from {name}",
            message=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        messages.success(request, "Message sent successfully!")
        return redirect("contact")

    return render(request, "contact.html")


def about(request):
    return render(request, "about.html")

def export_case(request):
    return render(request, "export_case.html")

def textile_concept(request):
    return render(request, "concepts/textile.html")

def export_concept(request):
    return render(request, "concepts/export.html")

def modern_concept(request):
    return render(request, "concepts/modern.html")