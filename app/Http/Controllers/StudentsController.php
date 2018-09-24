<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentsController extends Controller
{
    public function addStudent(Request $request)
    {
        $new = $request->input('student_name');
        return redirect()->route('ShowAllStudents');
        
//        DB::table('person')->insert(['name'=> $request->input('student_name')]);

    }

    public function showStudents()
    {
//        $all_students = DB::table('students_entity')
//            ->leftJoin('person', 'students_entity.id_person', '=', 'person.id_person')
//            ->get();
//        return view('students', ['all_students'=>$all_students]);

        $all_students = DB::table('person')->paginate(8);;
        return view('students', ['all_students' => $all_students]);
    }

    public function studentPersonaView($id)
    {
        $studentView = DB::table('person')->where('id_person', '=', $id)->first();
        return view('studentPersona', ['studentView' => $studentView]);
    }
}
