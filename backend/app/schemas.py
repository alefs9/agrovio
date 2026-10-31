from typing import Literal
from pydantic import BaseModel, Field, ConfigDict


class Strict(BaseModel):
    model_config = ConfigDict(extra='forbid')


class Login(Strict):
    email: str = Field(min_length=3, max_length=254)
    password: str = Field(min_length=1, max_length=256)


class Register(Login):
    name: str = Field(min_length=2, max_length=100)
    company: str = Field(min_length=2, max_length=150)
    role: Literal['comprador', 'proveedor']
    phone: str = Field(default='', max_length=25)


class Profile(Strict):
    name: str = Field(min_length=2, max_length=100)
    company: str = Field(min_length=2, max_length=150)
    email: str = Field(min_length=3, max_length=254)
    phone: str = Field(default='', max_length=25)


class ListingInput(Strict):
    id: str = Field(min_length=1, max_length=80)
    name: str = Field(min_length=2, max_length=100)
    type: Literal['cosecha', 'industrial']
    category: str = Field(default='', max_length=80)
    zone: str = Field(min_length=2, max_length=100)
    quantity: int = Field(gt=0, le=10000000)
    price: float = Field(gt=0, le=1000000, allow_inf_nan=False)
    photo: str = Field(default='', max_length=1500000)


class ListingEdit(Strict):
    name: str = Field(min_length=2, max_length=100)
    zone: str = Field(min_length=2, max_length=100)
    quantity: int = Field(gt=0, le=10000000)
    price: float = Field(gt=0, le=1000000, allow_inf_nan=False)


class Review(Strict):
    approve: bool
    note: str = Field(default='', max_length=1000)


class OfferInput(Strict):
    id: str = Field(min_length=1, max_length=80)
    quantity: int = Field(gt=0, le=10000000)
    price: float = Field(gt=0, le=1000000, allow_inf_nan=False)
    note: str = Field(default='', max_length=1000)


class OfferResponse(Strict):
    status: Literal['Aceptada', 'Rechazada', 'Contraoferta']
    price: float | None = Field(default=None, gt=0, le=1000000, allow_inf_nan=False)


class MessageInput(Strict):
    id: str = Field(min_length=1, max_length=80)
    text: str = Field(min_length=1, max_length=2000)
    buyer_id: str | None = None


class PaymentInput(Strict):
    action: Literal['receive', 'release']
    reference: str = Field(min_length=3, max_length=150)


class PlanInput(Strict):
    name: str = Field(min_length=2, max_length=80)
    quota: int = Field(ge=1, le=100000)
    days: int = Field(default=30, ge=1, le=366)
    reference: str = Field(min_length=3, max_length=150)


class RatingInput(Strict):
    rating: int = Field(ge=1, le=5)


class BotInput(Strict):
    text: str = Field(min_length=1, max_length=1500000)
