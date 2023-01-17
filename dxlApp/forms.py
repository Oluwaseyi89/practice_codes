from django import forms


class RegForm(forms.Form):
    FirstName = forms.CharField(max_length=100)
    LastName = forms.CharField(max_length=100)
    eMail = forms.EmailField(max_length=100)
    passWord = forms.PasswordInput()
    reTypPass = forms.PasswordInput()
