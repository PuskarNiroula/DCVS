<?php
namespace App\interface;
use App\DTO\UserDto;

interface UserInterface
{
    public function getUserByEmail(string $email);
    public function createUser(UserDto $user);

}
