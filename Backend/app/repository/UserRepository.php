<?php

namespace App\repository;

use App\DTO\UserDto;
use App\interface\UserInterface;
use App\Models\User;

class UserRepository implements UserInterface
{

    public function getUserByEmail(string $email)
    {
      return User::where('email', $email)->first();
    }

    public function createUser(UserDto $user):void
    {
         User::create([
            'name' => $user->name,
            'email' => $user->email,
            'password'=>$user->password
        ]);
    }

    public function getAll(){
        return User::all();
    }
}
