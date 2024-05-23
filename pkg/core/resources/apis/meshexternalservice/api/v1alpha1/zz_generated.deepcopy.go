//go:build !ignore_autogenerated

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import (
	commonv1alpha1 "github.com/kumahq/kuma/api/common/v1alpha1"
	"k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Address) DeepCopyInto(out *Address) {
	*out = *in
	out.Origin = in.Origin
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Address.
func (in *Address) DeepCopy() *Address {
	if in == nil {
		return nil
	}
	out := new(Address)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AddressOrigin) DeepCopyInto(out *AddressOrigin) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AddressOrigin.
func (in *AddressOrigin) DeepCopy() *AddressOrigin {
	if in == nil {
		return nil
	}
	out := new(AddressOrigin)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Endpoint) DeepCopyInto(out *Endpoint) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Endpoint.
func (in *Endpoint) DeepCopy() *Endpoint {
	if in == nil {
		return nil
	}
	out := new(Endpoint)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Extension) DeepCopyInto(out *Extension) {
	*out = *in
	if in.Config != nil {
		in, out := &in.Config, &out.Config
		*out = new(v1.JSON)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Extension.
func (in *Extension) DeepCopy() *Extension {
	if in == nil {
		return nil
	}
	out := new(Extension)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Match) DeepCopyInto(out *Match) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Match.
func (in *Match) DeepCopy() *Match {
	if in == nil {
		return nil
	}
	out := new(Match)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeshExternalService) DeepCopyInto(out *MeshExternalService) {
	*out = *in
	out.Match = in.Match
	in.Extension.DeepCopyInto(&out.Extension)
	if in.Endpoints != nil {
		in, out := &in.Endpoints, &out.Endpoints
		*out = make([]Endpoint, len(*in))
		copy(*out, *in)
	}
	in.Tls.DeepCopyInto(&out.Tls)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeshExternalService.
func (in *MeshExternalService) DeepCopy() *MeshExternalService {
	if in == nil {
		return nil
	}
	out := new(MeshExternalService)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeshExternalServiceStatus) DeepCopyInto(out *MeshExternalServiceStatus) {
	*out = *in
	out.Vip = in.Vip
	if in.Addresses != nil {
		in, out := &in.Addresses, &out.Addresses
		*out = make([]Address, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeshExternalServiceStatus.
func (in *MeshExternalServiceStatus) DeepCopy() *MeshExternalServiceStatus {
	if in == nil {
		return nil
	}
	out := new(MeshExternalServiceStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SANMatch) DeepCopyInto(out *SANMatch) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SANMatch.
func (in *SANMatch) DeepCopy() *SANMatch {
	if in == nil {
		return nil
	}
	out := new(SANMatch)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Tls) DeepCopyInto(out *Tls) {
	*out = *in
	out.Version = in.Version
	in.Verification.DeepCopyInto(&out.Verification)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Tls.
func (in *Tls) DeepCopy() *Tls {
	if in == nil {
		return nil
	}
	out := new(Tls)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TlsVersion) DeepCopyInto(out *TlsVersion) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TlsVersion.
func (in *TlsVersion) DeepCopy() *TlsVersion {
	if in == nil {
		return nil
	}
	out := new(TlsVersion)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Verification) DeepCopyInto(out *Verification) {
	*out = *in
	if in.SubjectAltNames != nil {
		in, out := &in.SubjectAltNames, &out.SubjectAltNames
		*out = make([]SANMatch, len(*in))
		copy(*out, *in)
	}
	if in.CaCert != nil {
		in, out := &in.CaCert, &out.CaCert
		*out = new(commonv1alpha1.DataSource)
		(*in).DeepCopyInto(*out)
	}
	if in.ClientCert != nil {
		in, out := &in.ClientCert, &out.ClientCert
		*out = new(commonv1alpha1.DataSource)
		(*in).DeepCopyInto(*out)
	}
	if in.ClientKey != nil {
		in, out := &in.ClientKey, &out.ClientKey
		*out = new(commonv1alpha1.DataSource)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Verification.
func (in *Verification) DeepCopy() *Verification {
	if in == nil {
		return nil
	}
	out := new(Verification)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *VipStatus) DeepCopyInto(out *VipStatus) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new VipStatus.
func (in *VipStatus) DeepCopy() *VipStatus {
	if in == nil {
		return nil
	}
	out := new(VipStatus)
	in.DeepCopyInto(out)
	return out
}