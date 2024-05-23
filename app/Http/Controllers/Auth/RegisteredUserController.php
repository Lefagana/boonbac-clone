<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\View\View;

class RegisteredUserController extends Controller
{
 /**
  * Display the registration view.
  */
 public function create(): View
 {
  return view('frontend.register');
 }

 /**
  * Handle an incoming registration request.
  *
  * @throws \Illuminate\Validation\ValidationException
  */
 public function store(Request $request): RedirectResponse
 {
//   $request->validate([
//    'username' => ['required', 'string', 'max:255'],
//    'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
//    'password' => ['required', 'confirmed', Rules\Password::defaults()],
//   ]);
  if ($request->password < 8) {
   $notification = array(
    'message' => 'Password must be greater >= 8!',
    'alert-type' => 'warning',
   );
   return redirect()->back()->with($notification);
  }

  $user = User::create([
   'username' => $request->username,
   'gender' => $request->gender,
   'email' => $request->email,
   'password' => Hash::make($request->password),
  ]);

  event(new Registered($user));

  Auth::login($user);

  return redirect(route('dashboard', absolute: false));
 }
}
