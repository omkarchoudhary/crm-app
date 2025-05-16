<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function index()
    {
        return Lead::all();
    }

    public function store(Request $request)
    {
        $lead = Lead::create($request->all());
        return response()->json($lead, 201);
    }

    public function show($id)
    {
        return Lead::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $lead = Lead::findOrFail($id);
        $lead->update($request->all());
        return response()->json($lead);
    }

    public function destroy($id)
    {
        Lead::destroy($id);
        return response()->json(null, 204);
    }
}
